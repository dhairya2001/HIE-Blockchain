pragma solidity 0.4.25;

contract PersonalData
{
    
    string specialization;
    string email;
    string name;
    int contact;
    string d_id;
    

    
    constructor() public
    {
        specialization="";
        email="";
        name="";
        contact=0;
        d_id="";
    }
    
    function getSpecialization() view public returns(string)
    {
        return specialization;
    }
    
     function getEmail() view public returns(string)
    {
        return email;
    }
    
    function getname() view public returns(string)
    {
        return name;
    }
    
    function getContact() view public returns(int)
    {
        return contact;
    }
    
    function getDid() view public returns(string)
    {
        return d_id;
    }
    
    // function updateDiagnosis(string upd) public
    // {
    //     // main_balance = main_balance - amt;
    //     // spending = spending + amt;
    //     // prevdia = string.concat(bytes (prevdia)),concat(bytes (upd));

    // }
    
    function giveEmail(string em) public
    {
        email = em;
    }
    
    function giveSpecialization(string spec) public
    {
        specialization = spec;
    }

    function giveDid(string id) public
    {
        d_id=id;
    }

    function giveName(string nm) public
    {
        name = nm;
    }
    
    function giveContact(int con) public
    {
        contact = con;
    }
    
}