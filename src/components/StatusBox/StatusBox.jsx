

const StatusBox = () => {
    return (
        <section className="mt-20 border border-r-3 max-w-6xl mx-auto ">
            <table className="flex flex-col space-y-2 px-6 pt-2">
                <tr className="flex text-slate-400 ">
                    <th className="flex-1 text-left font-normal">Shipment Number 6741696</th>
                    <th className="flex-1 text-left font-normal">Latest Update</th>
                    <th className="flex-1 text-left font-normal">Store Name</th>
                    <th className="flex-1 text-left font-normal">Receiving Date</th>
                </tr>
                <tr className="flex font-bold">
                    <td className="flex-1  ">Shipment is not delivered</td>
                    <td className="flex-1  ">Monday 06/4/2020 5:33 pm</td>
                    <td className="flex-1">SOUQ.COM</td>
                    <td className="flex-1 ">3 Jan 2020</td>
                </tr>
            </table>
            <hr />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ut, ex et libero aspernatur quod accusamus natus temporibus voluptatibus, quisquam dolor facilis, vitae amet? Omnis consectetur quibusdam suscipit nulla quia.
        </section>

    )
}

export default StatusBox
