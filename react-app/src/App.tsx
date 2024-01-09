import ListCities from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/button';
import SingleButton from './components/SingleButton';

function App() {
  const cities = ['New York', 'London', 'Tokyo', 'Kenya', 'Australia'];
  const handleSelectItem = (city: string) => console.log(city);

  const labels = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ];

  return (
    <div>
      <ListCities
        cities={cities}
        heading="Cities"
        header="Which city are you from"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        You must pick a city to <a href="#">continue</a>
      </Alert>
      <Button onClick={() => console.log('clicked')} texts={labels} />

      <SingleButton>Click</SingleButton>
    </div>
  );
}

export default App;
