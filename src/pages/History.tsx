export function History() {
  return (
    <section className="flex flex-col gap-8 ">
      <h2 className="text-gray-100 font-bold text-xl text-left">Meu histórico</h2>

      <table className="max-w-[946px] text-sm overflow-auto">
        <thead className="  bg-gray-600 text-gray-100 font-bold  ">
          <tr className="">
            <th className="rounded-tl-lg py-4 px-6 text-start">Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th className="rounded-tr-lg">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-200 max-h-[408px] overflow-auto">

          <tr className="bg-gray-700 border-t-4 border-t-gray-800 ">
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
          </tr>

          <tr className="bg-gray-700 border-t-4 border-t-gray-800 ">
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
            <td className="py-4 px-6 mt-2">Conserto de débitos técnicos </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
