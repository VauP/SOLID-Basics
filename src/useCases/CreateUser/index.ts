import { MailTrapMailProvider } from "../../providers/Implementations/MailTrapMailProvider";
import { PostgressUserRepository } from "../../repositories/Implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const postgresUserRepository = new PostgressUserRepository;
const mailtrapMailProvider = new MailTrapMailProvider;

const createUserUseCase = new CreateUserUseCase (
    postgresUserRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController (
    createUserUseCase
)

export { createUserController, createUserUseCase }