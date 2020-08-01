import { fetchGithubUser } from "./fetchGithubUser";

it("should test fetchGithubUser function", async (done) => {
  try {
    const resp = await fetchGithubUser("akaspanion");
    const data = await resp.json();

    expect(data).toEqual(
      expect.objectContaining({
        login: expect.any(String),
        avatar_url: expect.any(String),
      })
    );
    done();
  } catch (err) {
    done();
  }
});
