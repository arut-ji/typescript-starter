import { GreeterService } from "../src";
import { mock } from "jest-mock-extended";
describe('GreeterService', () => {
    const greetingWordGenerator = mock();
    greetingWordGenerator.getWord.mockReturnValue(Promise.resolve("Moin!"));
    const service = new GreeterService({ greetingWordGenerator });
    it('should return a greeting message with a given name', () => {
        return service.greet("Yor").then(result => {
            expect(result).toBe('Moin! Yor');
            expect(greetingWordGenerator).toBeCalled;
        });
    });
});
