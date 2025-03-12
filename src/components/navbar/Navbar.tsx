'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  List,
  X,
  Football,
  Horse,
  Spade,
  Tag,
  Info,
} from '@phosphor-icons/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    {
      href: '/sports',
      label: 'Sportsbook',
      icon: <Football color={isOpen ? 'oklch(30.52% 0 0)' : 'white'} />,
    },
    {
      href: '/racebook',
      label: 'Racebook',
      icon: <Horse color={isOpen ? 'oklch(30.52% 0 0)' : 'white'} />,
    },
    {
      href: '/casino',
      label: 'Casino',
      icon: <Spade color={isOpen ? 'oklch(30.52% 0 0)' : 'white'} />,
    },
    {
      href: '/promotions',
      label: 'Promotions',
      icon: <Tag color={isOpen ? 'oklch(30.52% 0 0)' : 'white'} />,
    },
    {
      href: '/help',
      label: 'Help',
      icon: <Info color={isOpen ? 'oklch(30.52% 0 0)' : 'white'} />,
    },
  ]

  return (
    <div className="bg-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Ruby-Wager-Logo.png"
              alt="RubyWager Logo"
              width={92}
              height={20}
              priority
            />
          </Link>

          {/* Navigation items for desktop - hidden on mobile and tablet */}
          <div className="ml-[60px] hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.label}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Login and Sign Up buttons - hidden on mobile */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="brandDark">Join Now</Button>
          <Button variant="outline">Login</Button>
        </div>

        {/* Mobile and tablet menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <List color="white" className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex h-full flex-col p-5">
                <div className="flex justify-end">
                  <Button size="icon" onClick={() => setIsOpen(false)}>
                    <X size={24} />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <nav className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="hover:bg-accent flex items-center rounded-md px-2 py-2 text-lg font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex gap-2 pb-6">
                  <Button variant="brandDark" className="w-[50%]">
                    Join Now
                  </Button>
                  <Button variant="outline" className="w-[50%]">
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Navbar
