type Props = {
  title: string
}

const bla = 'djdaod'

export default function Home({ title = 'React Avançado' }: Props) {
  return <h1>{title}</h1>
}
