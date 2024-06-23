import { useAuth0 } from '@auth0/auth0-react';
import { CircleUserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const UserMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2 p-3 font-bold hover:text-orange-50'>
        <CircleUserRound className='text-orange-500' size={24} />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to='/user-profile' className='font-bold hover:text-orange-500'>
            My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            className='flex flex-1 font-bold bg-orange-500'
            onClick={() => logout()}>
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
