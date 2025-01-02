// import {useState} from 'react';
// import {Outlet, useNavigate} from 'react-router-dom';
// import {Button, Layout, Menu} from 'antd';
// import {LogoutOutlined} from '@ant-design/icons';
// import {sidebarItems} from '../../constant/sidebarItems';
// import {useAppDispatch} from '../../redux/hooks';
// import {logoutUser} from '../../redux/services/authSlice';

// const {Content, Sider} = Layout;

// const Sidebar = () => {
//   const [showLogoutBtn, setShowLogoutBtn] = useState(true);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     dispatch(logoutUser());
//     navigate('/');
//   };

//   return (
//     <Layout style={{height: '100vh'}}>
//       <Sider
//         breakpoint='lg'
//         collapsedWidth='0'
//         onCollapse={(collapsed, type) => {
//           if (type === 'responsive') {
//             setShowLogoutBtn(!collapsed);
//           }
//           if (type === 'clickTrigger') {
//             setShowLogoutBtn(!collapsed);
//           }
//         }}
//         width='220px'
//         style={{
//           backgroundColor: '#164863',
//           position: 'relative',
//         }}
//       >
//         <div className='demo-logo-vertical'>
//           <h1 style={{color: '#fff', padding: '1rem', fontSize: '1.8rem', textAlign: 'center'}}>
//             WELCOME
//           </h1>
//         </div>
//         <Menu
//           theme='dark'
//           mode='inline'
//           style={{backgroundColor: '#164863', fontWeight: '700'}}
//           defaultSelectedKeys={['Dashboard']}
//           items={sidebarItems}
//         />
//         {showLogoutBtn && (
//           <div
//             style={{
//               margin: 'auto',
//               position: 'absolute',
//               bottom: 0,
//               padding: '1rem',
//               display: 'flex',
//               width: '100%',
//               justifyContent: 'center',
//             }}
//           >
//             <Button
//               type='primary'
//               style={{
//                 width: '100%',
//                 backgroundColor: 'cyan',
//                 color: '#000',
//                 fontWeight: 600,
//                 textTransform: 'uppercase',
//               }}
//               onClick={handleClick}
//             >
//               <LogoutOutlined />
//               Logout
//             </Button>
//           </div>
//         )}
//       </Sider>
//       <Layout>
//         <Content style={{padding: '2rem', background: '#BBE1FA'}}>
//           <div
//             style={{
//               padding: '1rem',
//               maxHeight: 'calc(100vh - 4rem)',
//               minHeight: 'calc(100vh - 4rem)',
//               background: '#fff',
//               borderRadius: '1rem',
//               overflow: 'auto',
//             }}
//           >
//             <Outlet />
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Sidebar;

import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { sidebarItems } from '../../constant/sidebarItems';
import { useAppDispatch } from '../../redux/hooks';
import { logoutUser } from '../../redux/services/authSlice';

const { Content, Sider } = Layout;

const Sidebar = () => {
  const [showLogoutBtn, setShowLogoutBtn] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          if (type === 'responsive' || type === 'clickTrigger') {
            setShowLogoutBtn(!collapsed);
          }
        }}
        width="250px"
        style={{
          background: '#ffffff',
          borderRight: '1px solid #e8e8e8',
          position: 'relative',
          boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            padding: '1.5rem',
            textAlign: 'center',
            borderBottom: '1px solid #e8e8e8',
          }}
        >
          <h1
            style={{
              margin: 0,
              color: '#4caf50',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            InventoryApp
          </h1>
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{ fontWeight: '600' }}
          defaultSelectedKeys={['Dashboard']}
          items={sidebarItems}
        />
        {showLogoutBtn && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              padding: '1rem',
              borderTop: '1px solid #e8e8e8',
            }}
          >
            <Button
              type="primary"
              block
              style={{
                backgroundColor: '#4caf50',
                borderColor: '#4caf50',
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
              onClick={handleClick}
            >
              <LogoutOutlined />
              Logout
            </Button>
          </div>
        )}
      </Sider>
      <Layout>
        <Content style={{ padding: '2rem', background: '#f0f2f5' }}>
          <div
            style={{
              padding: '1rem',
              maxHeight: 'calc(100vh - 4rem)',
              minHeight: 'calc(100vh - 4rem)',
              background: '#fff',
              borderRadius: '1rem',
              overflow: 'auto',
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
