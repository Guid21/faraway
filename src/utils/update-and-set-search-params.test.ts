import { updateAndSetSearchParams } from "./update-and-set-search-params";

describe('updateAndSetSearchParams function', () => {
    let setSearchParamsMock: jest.Mock<unknown, unknown[]>;
    
    beforeEach(() => {
      setSearchParamsMock = jest.fn();
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });
    
    it('should call setSearchParams with a non-empty params object', () => {
      const params = {
        name: 'John',
        age: 30,
        profession: null,
        address: undefined,
      };
      
      updateAndSetSearchParams({ params, setSearchParams: setSearchParamsMock });
      
      expect(setSearchParamsMock).toHaveBeenCalledTimes(1);
      expect(setSearchParamsMock).toHaveBeenCalledWith({
        name: 'John',
        age: '30',
      });
    });
    
    it('should not add properties with null or undefined values to search params', () => {
      const params = {
        name: 'John',
        age: 30,
        profession: null,
        address: undefined,
      };
      
      updateAndSetSearchParams({ params, setSearchParams: setSearchParamsMock });
      
      expect(setSearchParamsMock).not.toHaveBeenCalledWith(expect.objectContaining({
        profession: null,
        address: undefined,
      }));
    });
  
    it('should convert all non-string values to string', () => {
      const params = {
        name: 'John',
        age: 30,
      };
      
      updateAndSetSearchParams({ params, setSearchParams: setSearchParamsMock });
      
      expect(setSearchParamsMock).toHaveBeenCalledWith({
        name: 'John',
        age: '30',
      });
    });
  });
  