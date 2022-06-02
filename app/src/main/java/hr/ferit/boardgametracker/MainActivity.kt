package hr.ferit.boardgametracker

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.text.ClickableText
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.TextUnit
import hr.ferit.boardgametracker.ui.theme.BoardGameTrackerTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BoardGameTrackerTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    displayBoardGames()
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name!")
}
@Composable
fun displayBoardGames() {
// this variable use to handle list state
    val notesList = remember {
        mutableStateListOf<String>()
    }
// this variable use to handle edit text input value
    val inputvalue = remember { mutableStateOf(TextFieldValue()) }

    Column {
        Row(
            Modifier
                .fillMaxWidth()
                .height(Dp(60f))
        ) {

            TextField(
                value = inputvalue.value,
                onValueChange = {
                    inputvalue.value = it
                },
                modifier = Modifier.weight(0.8f),
                placeholder = { Text(text = "Enter the name of the board game") },
                keyboardOptions = KeyboardOptions(
                    capitalization = KeyboardCapitalization.None,
                    autoCorrect = true, keyboardType = KeyboardType.Text, imeAction = ImeAction.Done
                ),
                textStyle = TextStyle(
                    color = Color.Black, fontSize = TextUnit.Unspecified,
                    fontFamily = FontFamily.SansSerif
                ),
                maxLines = 1,
                singleLine = true
            )

            Button(
                onClick = {
                    notesList.add(inputvalue.value.text)
                },
                modifier = Modifier
                    .weight(0.2f)
                    .fillMaxHeight()
            ) {
                Text(text = "ADD")
            }
        }

        Spacer(modifier = Modifier.height(Dp(1f)))

        Surface(modifier = Modifier.padding(all = Dp(5f))) {
            LazyColumn {

                itemsIndexed(notesList) { index, item ->

                    val annotatedText = buildAnnotatedString {
                        withStyle(
                            style = SpanStyle(
                                color = Color.Blue,
                                fontWeight = FontWeight.Bold
                            )
                        ) {
                            append("Delete")
                        }
                    }
                    Row(
                        Modifier
                            .fillMaxWidth()
                            .height(Dp(50f))
                    ) {

                        Text(text = item, Modifier.weight(0.85f))

                        ClickableText(
                            text = annotatedText, onClick = {

                                notesList.remove(item)

                            },
                            modifier = Modifier.weight(0.15f)
                        )
                    }
                }
            }
        }


    }


}
@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    BoardGameTrackerTheme {
        Greeting("Android")
    }
}