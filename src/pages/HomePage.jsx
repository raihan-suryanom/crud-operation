import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';
import Post from '../features/post/Post';

const HomePage = () => {
  const { unique, isLoading } = useSelector((state) => state.data);

  return (
    <main className="flex flex-col items-center justify-start">
      <h1 className="text-center lg:text-4xl font-bold">
        Test Coding PT. Infracom
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center w-full my-12 mx-auto px-10">
          <span className="mx-auto animate-pulse lg:w-48 h-48 rounded-full bg-slate-500" />
          <span className="mx-auto animate-pulse lg:w-3/12 h-48 bg-slate-500" />
          <span className="mx-auto animate-pulse lg:w-3/12 h-48 bg-slate-500" />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full my-12">
          <ResponsiveContainer width="30%" height={300}>
            <PieChart>
              <Pie
                data={unique}
                dataKey="totalPosts"
                nameKey="userId"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#FECC1B"
                label
              />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="30%" height={300}>
            <LineChart data={unique}>
              <Line type="monotone" dataKey="totalPosts" stroke="#FECC1B" />
              <CartesianGrid stroke="#F2F2F2" strokeDasharray="5 5" />
              <XAxis dataKey="userId" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  color: '#FECC1B',
                  backgroundColor: '#121212',
                  fontWeight: 'bold',
                }}
              />
              <Legend verticalAlign="top" height={36} />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="30%" height={300}>
            <BarChart data={unique}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="userId">
                <Label
                  content={() => <p>Test</p>}
                  offset={100}
                  position="centerTop"
                />
              </XAxis>
              <YAxis />
              <Bar dataKey="totalPosts" fill="#FECC1B" />
              <Tooltip
                cursor={false}
                contentStyle={{
                  color: '#FECC1B',
                  backgroundColor: '#121212',
                  fontWeight: 'bold',
                }}
              />
              <Legend verticalAlign="top" height={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      <h2 className="text-center lg:text-3xl font-bold my-5">
        List of user posts
      </h2>
      <Post />
    </main>
  );
};

export default HomePage;
