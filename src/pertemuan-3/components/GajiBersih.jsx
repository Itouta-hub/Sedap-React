export default function({gaji, pajak}){

    const totalGaji = gaji-(gaji*pajak)
    
    return(
        <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
			<p className="font-semibold">
				Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
			</p>
		</div>
    );
}