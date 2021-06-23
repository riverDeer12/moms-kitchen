export class ApiResponse<Entity> {
    sucess: boolean;
    message: string;
    results: Entity[];
    result: Entity;
}
