import { Menu } from 'lucide-react';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from './ui/sheet';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='space-y-3'>
          <SheetTitle>Welcome to FoodickResto</SheetTitle>
          <Separator />
          <SheetDescription className='flex'>
            <Button className='flex-1 font-bold bg-orange-500'>Login</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
