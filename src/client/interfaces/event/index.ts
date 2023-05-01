import * as guilded from "guilded.js"

enum EventTypes {
    on,
    once
}

type IEventNames = keyof guilded.ClientEvents
type IEventTypes = keyof typeof EventTypes

interface IEvent {
    name: IEventNames,
    type: IEventTypes,
    run: (...args: any) => Promise<any>
}

export default IEvent