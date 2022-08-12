import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page A', uv: 300, pv: 400, amt: 200 },
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
];

const HomePage = () => {
  return (
    <main>
      <LineChart width={500} height={200} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <p>test</p>
    </main>
  );
};

export default HomePage;
