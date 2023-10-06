import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Entity {
    constructor(props?: Partial<Entity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string
}
