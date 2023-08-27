import { Outlet } from 'react-router-dom';
import './App.scss';
import { NavigationMenu } from './components/TopMenu/TopMenu';
import { SideMenu } from './components/NavigationMenu/NavigationMenu';

export const App:React.FC = () => {
  return (
    <>
      <NavigationMenu />
      <main className='main'>
        <SideMenu />
        <Outlet />
      </main>
    </>
  )
}
