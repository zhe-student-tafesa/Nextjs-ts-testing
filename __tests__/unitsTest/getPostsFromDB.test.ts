import { getPostsFromDB } from "@/lib/utils";

// 01 Define a set of mock data, called `mockPosts`, to simulate the list of posts returned by the API.
const mockPosts = [
  { userId: 1, id: 1, title: "Title 1", body: "Body 1" },
  { userId: 2, id: 2, title: "Title 2", body: "Body 2" },
];

describe("getPostsFromDB", () => {
  // 0001 ARRANGE
  beforeEach(() => {
    global.fetch = jest.fn(() => // Use jest.fn() to create a mock function.
      Promise.resolve({
        ok: true,                // This indicates that the request was successful.
        json: () => Promise.resolve(mockPosts),  // The `json()` method returns `Promise.resolve(mockPosts)`, simulating the behavior of `res.json()` when returning data.
      } as Response)
    ) as jest.Mock;
  });

  // afterEach is executed after each test finishes.
  afterEach(() => {
    jest.resetAllMocks(); // `jest.resetAllMocks()` resets the state and call history of all mocks, preventing one test from affecting another.
  });

  it("fetches posts from API", async () => { // The `async () =>` syntax indicates that this is an asynchronous test, because `getPostsFromDB` is an asynchronous function.
    // 0002 ACT
    const result = await getPostsFromDB();  // Call the function getPostsFromDB() to be tested and wait for it to complete. The returned value will be stored in the variable "result".
    // 0003 ASSERT
    expect(result).toEqual(mockPosts); // toEqual compares the content of objects or arrays, not their memory addresses.
    expect(global.fetch).toHaveBeenCalledWith(  // Assert that the `fetch` function was called, and that the URL parameter passed to it was "https://jsonplaceholder.typicode.com/posts".
      "https://jsonplaceholder.typicode.com/posts"
    );
  });

  // Test the scenario where a network request fails.
  it("throws error if network fails", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>  // Use mockImplementationOnce to temporarily override the fetch implementation for one time.
      Promise.resolve({ ok: false } as Response)
    );

    await expect(getPostsFromDB()).rejects.toThrow(
      "Network response was not ok"
    );
  });
});
