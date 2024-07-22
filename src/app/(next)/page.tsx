import configPromise from '@payload-config'
import { getPayload } from 'payload'

const getTests = async () => {
    const payload = await getPayload({
        config: configPromise,
    })

    const data = await payload.find({
        collection: 'tests',
        locale: 'en',
    })

    console.log(data);

    return data;
}

export default async function Page() {
    const tests = await getTests();
    
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