'use client'
import { twMerge } from 'tailwind-merge'
import { Typography } from 'antd'
import { ParagraphProps } from 'antd/es/typography/Paragraph'
import { TitleProps } from 'antd/es/typography/Title'
const { Title, Paragraph } = Typography
const P = ({ children, className, ...rest }: ParagraphProps) => {
  return (
    <Paragraph
      className={twMerge(
        '!text-black !text-[14px] md:!text-[16px] lg:!text-[18px] ',
        className,
      )}
      {...rest}
    >
      {children}
    </Paragraph>
  )
}

export { P }

const H1 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      className={twMerge(
        '!text-black !text-[28px] md:!text-[30px]  lg:!text-[34px]  xl:!text-[38px] !m-0',
        className,
      )}
      {...rest}
    >
      {children}
    </Title>
  )
}

export { H1 }

const H2 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={2}
      className={twMerge(
        '!text-black !text-[26px] md:!text-[28px] lg:!text-[30px] xl:!text-[32px] !m-0',
        className,
      )}
      {...rest}
    >
      {children}
    </Title>
  )
}

export { H2 }

const H3 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={3}
      className={twMerge(
        '!text-black !text-[24px] md:!text-[26px] lg:!text-[28px] xl:!text-[30px] !m-0',
        className,
      )}
      {...rest}
    >
      {children}
    </Title>
  )
}

export { H3 }

const H4 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={4}
      className={twMerge(
        '!text-black !text-[22px] md:!text-[24px] lg:!text-[26px] xl:!text-[28px] !m-0',
        className,
      )}
      {...rest}
    >
      {children}
    </Title>
  )
}

export { H4 }

const H5 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={5}
      className={twMerge(
        '!text-black !text-[20px] md:!text-[22px] lg:!text-[24px] xl:!text-[26px] !m-0',
        className,
      )}
      {...rest}
    >
      {children}
    </Title>
  )
}

export { H5 }
