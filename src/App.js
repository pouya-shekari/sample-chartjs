import {BarChart , LineChart , PieChart} from './components'
const App = () => {
  return(
      <>
          <div>
              <BarChart />
          </div>
          <hr/>
          <div>
              <LineChart />
          </div>
          <hr/>
          <div>
              <PieChart />
          </div>
      </>
  );
}

export {App};
