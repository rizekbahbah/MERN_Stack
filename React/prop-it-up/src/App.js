import './App.css';
import PersonCard from './components/PersonCard';
var peopleArr = [
  { "firstName": "Rizek", "lastName": "Bahbah", "age": 20, "hairColor": "Blonde" },
  { "firstName": "Enzo", "lastName": "Dayem", "age": 28, "hairColor": "brown" },
  { "firstName": "Alex", "lastName": "njwd", "age": 21, "hairColor": "Brown" },
  { ":firstName": "Jack", "lastName": "bewifejn", "age": 26, "hairColor": "Black" }
]

const cx = {

  ":firstName": "jwejnek"
}

console.log(cx.firstName);

function App() {
  return (
    <div className="App">

      
      {

        peopleArr.map(person => {

          return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
        }
        )
      }
      <div>

      </div>
    </div>

  );
}
export default App;