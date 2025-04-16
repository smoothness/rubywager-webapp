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
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  List,
  X,
  Football,
  Horse,
  Spade,
  Tag,
  Bank,
  Article,
  Info,
} from '@phosphor-icons/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    {
      href: '/sportsbook',
      label: 'Sportsbook',
      icon: <Football color={'#AAA'} />,
    },
    {
      href: '/racebook',
      label: 'Racebook',
      icon: <Horse color={'#AAA'} />,
    },
    {
      href: '/casino',
      label: 'Casino',
      icon: <Spade color={'#AAA'} />,
    },
    {
      href: '/promotions',
      label: 'Promotions',
      icon: <Tag color={'#AAA'} />,
    },
    {
      href: '/banking',
      label: 'Banking',
      icon: <Bank color={'#AAA'} />,
    },
    {
      href: '/rules',
      label: 'Rules',
      icon: <Article color={'#AAA'} />,
    },
    {
      href: '/help',
      label: 'Help',
      icon: <Info color={'#AAA'} />,
    },
  ]

  return (
    <div className="bg-background">
      <div className="container flex w-[90%] items-center justify-between px-4 py-4 lg:mx-auto lg:w-full lg:px-4">
        <Link href="/" className="min-w-[92px]">
          <Image
            src="/Ruby-Wager-Logo.png"
            alt="RubyWager Logo"
            width={92}
            height={20}
            priority
          />
        </Link>
        {/* Login and Sign Up buttons - hidden on mobile */}
        <div className="flex items-center gap-2">
          <Button
            variant="brandDark"
            className="font-thunder px-4 pt-6 pb-5 text-2xl font-bold tracking-wider uppercase"
          >
            Join Now
          </Button>
          <Button
            variant="default"
            className="font-thunder px-4 pt-6 pb-5 text-2xl font-bold tracking-wider uppercase"
          >
            Login
          </Button>
        </div>
      </div>

      <div className="container mx-auto hidden px-4 pb-4 lg:block lg:px-4">
        {/* Navigation items for desktop - hidden on mobile and tablet */}
        <NavigationMenu className="block max-w-full">
          <NavigationMenuList className="justify-between">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile and tablet menu */}
      <div className="absolute top-4 right-4 z-50 ml-2 lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-[45px] w-[45px] lg:hidden"
            >
              <List color="white" className="h-6 w-6" />
              {/* <span className="text-background uppercase">Menu</span> */}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex h-full flex-col p-5">
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="bg-background hover:bg-accent flex items-center rounded-md px-2 py-2 text-lg font-medium transition-colors"
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
  )
}
