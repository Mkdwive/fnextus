import Container from "@/app/component/UI/common/Container";
import { API_USD } from "@/constant/api";
async function getRates() {
    try {
        const res = await fetch(
            API_USD,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) throw new Error("Failed to fetch market data");

        return res.json();
    }
    catch (err) {
        throw new Error(`Something went wrong , Error: ${err}`)
    }

}

export const metadata = {
    title: "Market Insights",
    description: "Live market trends affecting global grocery pricing",
};

export default async function MarketPage() {
    const data = await getRates();

    return (
        <section className="py-10">
            <Container>
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">
                        About Market Insights
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our platform is designed to help users explore a wide range of food products while gaining deeper awareness of their ingredients, nutritional value, and overall quality. Whether you are a conscious consumer, a health enthusiast, or simply someone curious about what goes into your daily meals, we provide the tools and information to make better choices.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 bg-linear-to-br from-orange-100 via-yellow-100 to-red-100 rounded-3xl p-8 shadow-lg relative overflow-hidden">

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300 opacity-30 blur-3xl"></div>

                        <h2 className="text-xl font-semibold mb-4">
                            Currency Exchange Impact
                        </h2>

                        <p className="text-5xl font-bold text-orange-600">
                            ₹ {data.rates.INR}
                        </p>

                        <p className="text-gray-600 mt-2">
                            1 USD = {data.rates.INR} INR
                        </p>

                        <p className="text-sm text-gray-500 mt-4 max-w-md">
                            Currency fluctuations directly influence global food prices,
                            import costs, and supply chain efficiency.
                        </p>

                        {/* small stats */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <MiniStat label="EUR" value={data.rates.EUR} />
                            <MiniStat label="GBP" value={data.rates.GBP} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <TrendCard
                            title="Import Costs"
                            desc="Stronger USD increases cost of imported food items."
                        />
                        <TrendCard
                            title="Inflation"
                            desc="Currency rise can directly impact grocery pricing."
                        />
                        <TrendCard
                            title="Supply Chain"
                            desc="Global currency affects logistics and availability."
                        />
                    </div>
                </div>

                {/* 🍽 ABOUT SECTION */}

            </Container>
        </section>
    );
}


function TrendCard({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition hover:-translate-y-1">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}

function MiniStat({
    label,
    value,
}: {
    label: string;
    value: number;
}) {
    return (
        <div className="bg-white/60 backdrop-blur rounded-xl p-3 text-center shadow-sm">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-semibold">{value}</p>
        </div>
    );
}