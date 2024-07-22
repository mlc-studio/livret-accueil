import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

const GET_TESTS = async () => {
    const payload = await getPayload({
        config: configPromise,
    })

    const data = await payload.find({
        collection: 'tests',
    })

    return data;
}

export default async function Page() {
    const tests = await GET_TESTS();

    return (
        <div>
            <h1>
                Hello, world!
            </h1>
            <pre>
                {JSON.stringify(tests, null, 2)}
            </pre>
        </div>
    )
}