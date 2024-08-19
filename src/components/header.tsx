import Image from 'next/image'
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
import { ThemeToggle } from '@/components/theme-toggle'

import { CopyToClipboard } from './copy-to-clipboard'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

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

  return (
    <header className="my-10">
      <div className="container flex items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium">
            Johnny Silva{' '}
            <code className="text-primary text-lg font-bold">&lt;JS/&gt;</code>
          </h1>
          <span className="text-primary text-lg font-medium">Johnny Dev</span>
        </div>
        <ThemeToggle />
      </div>
      <div className="container flex items-center justify-between">
        <div>
          <p className="mt-4">
            Olá, meu nome é Johnny Henrique da Silva (Johnny Dev), atuo como
            desenvolvedor{' '}
            <span className="text-primary font-semibold"> FullStack</span>, sou
            apaixonado por{' '}
            <span className="text-primary font-semibold">código</span>,
            desenvolver é minha praia.
          </p>

          <ul className="mt-8 flex items-center gap-2">
            {socials.map((social, index) => (
              <li key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={social.url} target="_blank">
                      <social.icon className="hover:text-primary h-8 w-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Ir para {social.name}</TooltipContent>
                </Tooltip>
              </li>
            ))}

            <li className="flex items-center">
              <CopyToClipboard
                link="#johnnydevjs"
                initialMessage="Clique para copiar o usuário do Discord"
                message="Usuário copiado para sua área de transferência"
              >
                <FaDiscord className="hover:text-primary h-8 w-8" />
              </CopyToClipboard>
            </li>

            <li className="flex items-center">
              <CopyToClipboard
                link="johnnydev.js@gmail.com"
                initialMessage="Clique para copiar o e-mail"
                message="E-mail copiado para sua área de transferência"
              >
                <FiMail className="hover:text-primary h-8 w-8" />
              </CopyToClipboard>
            </li>
          </ul>
        </div>

        <Image
          className="rounded-full"
          src={avatar}
          width={250}
          height={250}
          alt="Johnny Henrique da Silva"
        />
      </div>
    </header>
  )
}
