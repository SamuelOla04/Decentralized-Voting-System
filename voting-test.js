const { expect } = require("chai");

describe('Decentralized Voting System', function () {
    let VotingContract;

    beforeEach(async function () {
        const Voting = await ethers.getContractFactory("DecentralizedVoting");
        VotingContract = await Voting.deploy();
        await VotingContract.waitForDeployment(); // optional for newer Hardhat versions
    });

    it("should provide a candidate", async function () {
        const tx = await VotingContract.addCandidate("Rob");
        await tx.wait();

        const candidate = await VotingContract.candidates(1);
        expect(candidate.name).to.equal("Rob");
    });

    it("will increase vote count after voting", async function () {
        const tx = await VotingContract.addCandidate("Rob");
        await tx.wait();

        await VotingContract.vote(1);
        const candidate = await VotingContract.candidates(1);
        expect(candidate.voteCount).to.equal(1);
    });

    it("should reject any invalid candidate ID", async function () {
        const tx = await VotingContract.addCandidate("Rob");
        await tx.wait();

        await expect(VotingContract.vote(2)).to.be.revertedWith("Invalid candidate ID");
    });

    it("should reject double voting from the same address", async function () {
        const tx = await VotingContract.addCandidate("Rob");
        await tx.wait();

        await VotingContract.vote(1);

        await expect(VotingContract.vote(1)).to.be.revertedWith("You have already voted");
    });
});

