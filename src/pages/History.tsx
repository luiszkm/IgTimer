import { Status } from "../components/Status";
import { useCycles } from "../hooks/useCycles";
import {formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR";
export function History() {
  const { cycles } = useCycles()

  return (
    <section className="flex flex-col gap-8 ">
      <h2 className="text-gray-100 font-bold text-xl text-left">Meu histórico</h2>

      <div className="w-full max-w-[946px] ">
        <table className="w-full text-sm overflow-auto">
          <thead className="  bg-gray-600 text-gray-100 font-bold  ">
            <tr className="">
              <th className="rounded-tl-lg py-4 px-6 text-start">Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th className="rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-200 max-h-[408px] overflow-auto">
            {
              cycles.length <= 0 ?

              <tr className="bg-gray-700  border-t-gray-800 h-[408px]  ">
              <td className="py-4 px-6 mt-2">Nenhuma tarefa encontrada </td>
              <td className="py-4 px-6 mt-2">Nenhuma tarefa encontrada </td>
              <td className="py-4 px-6 mt-2">Nenhuma tarefa encontrada </td>
              <td className="py-4 px-6 mt-2"> Nenhuma tarefa encontrada </td>
              </tr>
                :
                cycles.map(cycle => (
                  <tr key={cycle.id}
                    className="bg-gray-700 border-t-4 border-t-gray-800 ">

                    <td className="py-4 px-6 mt-2">{cycle.task} </td>
                    <td className="py-4 px-6 mt-2">{cycle.amountMinutes} minutos </td>
                    <td className="py-4 px-6 mt-2">{formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR
                    })}</td>
                    <td className="py-4 px-6 mt-2">
                      <Status status={cycle.finishedDate ? 'finished' : cycle.interruptedDate ? 'failed' : 'progress'} />
                    </td>
                  </tr>
                ))
            }

          </tbody>
        </table>
      </div>

    </section >
  )
}
