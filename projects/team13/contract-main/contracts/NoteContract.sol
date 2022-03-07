// SPDX-License-Identifier: KAKA
pragma solidity >=0.4.22 <=0.8.12;

//Download @openzeppelin/contracts package
import '@openzeppelin/contracts/utils/Counters.sol';

contract NoteContract {

    using Counters for Counters.Counter;
    Counters.Counter private numberOfNotes

    struct Note {
        address sender;
        address receiver;
        string note;
    }

    mapping(uint => Note ) public notes;

    event NewNote(notes[uint]);

// 添加记事
    function addNote( string memory _note, address _receiver) public {
        numberOfNotes.increment()
        notes[numberOfNotes.current()] = Note(msg.sender, _receiver, _note );
        emit NewNote(notes[numberOfNotes.current()]);
    }

    function getNotesSentToMe() public view returns (uint) {
        uint notesCount = 0;
        uint currentIndex = 0;
        uint totalNotes = numberOfNotes.current();
        for (uint i = 0; i < totalNotes; i++) {
            if(notes[i+1].receiver == msg.sender) {
                notesCount += 1;
            }  
        }
        Note[] memory myNotes = new Note[](notesCount);
        for (uint i = 0; i < totalNotes; i++) {
            if (notes[i+1].receiver == msg.sender) {
                myNotes[currentIndex] = notes[i+1];
                currentIndex += 1;
            }
        }

        return myNotes;
    }
}