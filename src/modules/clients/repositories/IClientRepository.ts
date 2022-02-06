import { DeleteResult } from "typeorm";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";


export default interface IClientRepository {
    create (data: IClientDTO): Promise<Client>;
    index(): Promise<Client[]>;
    findById(id: number): Promise<Client | undefined>;
    findByCpf(cpf: string): Promise<Client | undefined>;
    findByName(name: string): Promise<Client | undefined>;    
    findByEmail(email: string): Promise<Client | undefined>;
    update(data: IClientDTO): Promise<Client>;
    delete(id: number): Promise<DeleteResult>;
}