import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  FaCodepen,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import avatar from '@/assets/avatar.png'
import { CopyToClipboard } from '@/components/copy-to-clipboard'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { ChangeTextStyle } from './change-text-color'
import LanguageToggle from './language-toggle'

export function Header() {
  const socials = [
    {
      name: 'Github',
      icon: FaGithub,
      url: 'https://github.com/JohnnyDevJs',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/johnny-silva-2b8409199/',
    },
    {
      name: 'Codepen',
      icon: FaCodepen,
      url: 'https://codepen.io/johnnydevjs',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://api.whatsapp.com/send/?phone=19993035607&text=Olá!+Quero+falar+sobre+desenvolvimento+de+aplicações.&app_absent=0',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://facebook.com/johnnyibf/',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/johnnyxsilva/',
    },
  ]

  const t = useTranslations('header')

  return (
    <header className="my-10">
      <div className="container flex items-start justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold max-sm:text-2xl">
            Johnny Silva{' '}
            <code className="text-lg font-bold text-primary">&lt;JS/&gt;</code>
          </h1>
          <span className="text-lg font-medium text-primary">Johnny Dev</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <div className="container flex items-center justify-between">
        <div>
          <ChangeTextStyle
            text={t('intro')}
            keywords={['Frontend', 'Backend', 'código', 'JavaScript', 'PHP']}
          />

          <Image
            className="mx-auto mt-4 h-full rounded-full max-sm:!w-52 sm:hidden"
            src={avatar}
            width={250}
            height={250}
            alt="Johnny Henrique da Silva"
          />

          <ul className="mt-8 flex flex-wrap items-center gap-2">
            {socials.map((social, index) => (
              <li key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={social.url} target="_blank">
                      <social.icon className="h-8 w-8 hover:text-primary" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{`${t('tooltip.socials')} ${social.name}`}</TooltipContent>
                </Tooltip>
              </li>
            ))}

            <li className="flex items-center">
              <CopyToClipboard
                link="#johnnydevjs"
                initialMessage={t('tooltip.discord.initialMessage')}
                message={t('tooltip.discord.message')}
              >
                <FaDiscord className="h-8 w-8 hover:text-primary" />
              </CopyToClipboard>
            </li>

            <li className="flex items-center">
              <CopyToClipboard
                link="johnnydev.js@gmail.com"
                initialMessage={t('tooltip.email.initialMessage')}
                message={t('tooltip.email.message')}
              >
                <FiMail className="h-8 w-8 hover:text-primary" />
              </CopyToClipboard>
            </li>
          </ul>
        </div>

        <Image
          className="rounded-full max-sm:hidden"
          src={avatar}
          width={250}
          height={250}
          alt="Johnny Henrique da Silva"
        />
      </div>
    </header>
  )
}
