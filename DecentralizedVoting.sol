// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.30;

contract DecentralizedVoting {
    struct candidate {
        string name;
        uint voteCount;
    }
    
    mapping (uint => candidate) public candidates;
    uint public candidatesCount; 
    mapping (address => bool) hasVoted;
    
    event voted (uint candidateID, address voter);

    function addCandidate(string memory name) public {
        candidatesCount++;
        candidates[candidatesCount] = candidate(name, 0);
    }

    function vote(uint _candidateID) public {
        require(_candidateID > 0 && _candidateID <= candidatesCount, "Invalid candidate ID");
        require(!hasVoted[msg.sender], "You have already voted");
        
        hasVoted[msg.sender] = true;

        candidates[_candidateID].voteCount++;
        emit voted(_candidateID, msg.sender);
    }

    function getvotes(uint candidateID) public view returns (uint) {
        return candidates[candidateID].voteCount;
    }
}
