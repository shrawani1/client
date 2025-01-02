// import { Col, Row } from 'antd';
// import MonthlyChart from '../components/Charts/MonthlyChart';
// import Loader from '../components/Loader';
// import { useCountProductsQuery } from '../redux/features/management/productApi';
// import { useYearlySaleQuery } from '../redux/features/management/saleApi';
// import DailyChart from '../components/Charts/DailyChart';

// const Dashboard = () => {
//   const { data: products, isLoading } = useCountProductsQuery(undefined);
//   const { data: yearlyData, isLoading: isLoading1 } = useYearlySaleQuery(undefined);

//   if (isLoading && isLoading1) return <Loader />;
//   else
//     return (
//       <>
//         <Row style={{ paddingRight: '1rem' }}>
//           <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{ padding: '.5rem' }}>
//             <div className='number-card'>
//               <h3>Total Stock</h3>
//               <h1>{products?.data?.totalQuantity || 0}</h1>
//             </div>
//           </Col>
//           <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{ padding: '.5rem' }}>
//             <div className='number-card'>
//               <h3>Total Item Sell </h3>
//               <h1>
//                 {yearlyData?.data.reduce(
//                   (acc: number, cur: { totalQuantity: number }) => (acc += cur.totalQuantity),
//                   0
//                 )}
//               </h1>
//             </div>
//           </Col>
//           <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{ padding: '.5rem' }}>
//             <div className='number-card'>
//               <h3>Total Revenue</h3>
//               <h1>
//                 $
//                 {yearlyData?.data.reduce(
//                   (acc: number, cur: { totalRevenue: number }) => (acc += cur.totalRevenue),
//                   0
//                 )}
//               </h1>
//             </div>
//           </Col>
//         </Row>
//         <div
//           style={{
//             border: '1px solid gray',
//             margin: '1rem',
//             padding: '1rem',
//             borderRadius: '10px',
//           }}
//         >
//           <h1 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Daily Sale and Revenue</h1>
//           <DailyChart />
//         </div>
//         <div
//           style={{
//             border: '1px solid gray',
//             margin: '1rem',
//             padding: '1rem',
//             borderRadius: '10px',
//           }}
//         >
//           <h1 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Monthly Revenue</h1>
//           <MonthlyChart />
//         </div>
//       </>
//     );
// };

// export default Dashboard;
import React from 'react';
import {
  Row,
  Col,
  Card,
  Typography,
  Statistic,
  Space,
  ConfigProvider,
} from 'antd';
import {
  DollarOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

// Existing Charts
import DailyChart from '../components/Charts/DailyChart';
import MonthlyChart from '../components/Charts/MonthlyChart';

// Additional Charts (placeholders)
import WeeklyChart from '../components/Charts/WeeklyChart';
import YearlyChart from '../components/Charts/YearlyChart';
import CategoryChart from '../components/Charts/CategoryChart';

// API hooks to fetch data
import { useCountProductsQuery } from '../redux/features/management/productApi';
import { useYearlySaleQuery } from '../redux/features/management/saleApi';

// Loader (optional)
import Loader from '../components/Loader';

const { Title } = Typography;

// Define a custom Ant Design theme (no background color is set here)
const customTheme = {
  token: {
    colorPrimary: '#2196f3',  // Blue primary color for accents
    colorLink: '#2196f3',
    borderRadius: 8,
    fontSize: 16,
    // Do not override colorBgContainer so the default background is used
  },
};

const DashboardContent: React.FC = () => {
  // Fetch your data
  const { data: products, isLoading: isProductsLoading } = useCountProductsQuery(undefined);
  const { data: yearlyData, isLoading: isYearlyLoading } = useYearlySaleQuery(undefined);

  // If loading, show spinner/loader
  if (isProductsLoading || isYearlyLoading) {
    return <Loader />;
  }

  // Safely extract data (fallback to 0)
  const totalQuantity = products?.data?.totalQuantity || 0;
  const totalItemsSold =
    yearlyData?.data?.reduce(
      (acc: number, cur: { totalQuantity: number }) => acc + cur.totalQuantity,
      0
    ) || 0;
  const totalRevenue =
    yearlyData?.data?.reduce(
      (acc: number, cur: { totalRevenue: number }) => acc + cur.totalRevenue,
      0
    ) || 0;

  return (
    <Space direction="vertical" style={{ width: '100%', padding: '1rem' }}>
      {/* Page Title */}
      <Title level={2} style={{ marginBottom: '1rem' }}>
        Dashboard
      </Title>

      {/* Top row: Statistics */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Stock"
              value={totalQuantity}
              prefix={<DatabaseOutlined style={{ color: '#2196f3' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Items Sold"
              value={totalItemsSold}
              prefix={<ShoppingCartOutlined style={{ color: '#2196f3' }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={totalRevenue}
              precision={2}
              prefix={<DollarOutlined style={{ color: '#2196f3' }} />}
            />
          </Card>
        </Col>
      </Row>

      {/* Row 2: Daily & Weekly Charts */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card>
            <Title level={4}>Daily Sales & Revenue</Title>
            <DailyChart />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card>
            <Title level={4}>Weekly Sales</Title>
            <WeeklyChart />
          </Card>
        </Col>
      </Row>

      {/* Row 3: Monthly & Yearly Charts */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card>
            <Title level={4}>Monthly Revenue</Title>
            <MonthlyChart />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card>
            <Title level={4}>Yearly Sales & Revenue</Title>
            <YearlyChart />
          </Card>
        </Col>
      </Row>

      {/* Row 4: Category Chart */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Card>
            <Title level={4}>Sales by Category</Title>
            <CategoryChart />
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

const Dashboard: React.FC = () => {
  return (
    <ConfigProvider theme={customTheme}>
      <DashboardContent />
    </ConfigProvider>
  );
};

export default Dashboard;
