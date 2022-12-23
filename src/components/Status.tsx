
interface StatusProps {
  status?: 'finished' | 'failed' | 'progress' ,

}

export function Status({ status }: StatusProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={
        status === 'finished' ? "w-2 h-2 rounded-full bg-[#04D361]" :
          status === 'failed' ? "w-2 h-2 rounded-full bg-[#AB222E]" :
          status === 'progress' ? "w-2 h-2 rounded-full bg-[#FBA94C]" : ''}></div>
      <span>
        {
          status === 'finished' ? "Concluído" :
          status === 'failed' ? "Interrompido" :
          status === 'progress' ? "Em andamento" :
          ""
        }
      </span>
    </div>
  )
}