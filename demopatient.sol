pragma solidity 0.4.25;

contract PersonalData
{
    
    string prevdia;
    string update;
    string name;
    int age;
    

    
    constructor() public
    {
        prevdia="";
        update="";
        name="";
        age=0;
    }
    
    function getPrevDia() view public returns(string)
    {
        return prevdia;
    }
    
     function getDia() view public returns(string)
    {
        return update;
    }
    
    function getname() view public returns(string)
    {
        return name;
    }
    
    function getAge() view public returns(int)
    {
        return age;
    }
    
    
    // function updateDiagnosis(string upd) public
    // {
    //     // main_balance = main_balance - amt;
    //     // spending = spending + amt;
    //     // prevdia = string.concat(bytes (prevdia)),concat(bytes (upd));

    // }
    
    function recentDia(string rec) public
    {
        update = rec;
    }
    
    function givename(string nm) public
    {
        name = nm;
    }
    
    function giveAge(int a) public
    {
        age = a;
    }
    
}