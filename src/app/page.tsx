import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Pagina Principal</h1>
      <Link href="/AdminDashboard">
      <button>Admin DashBoard</button>
      </Link>
      </div>
      )
}
