<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactsContoller extends Controller
{
    function createEditContact(Request $request,$id="add") {
        if($id=="add"){
            $contact=new Contact;
        }else{
            $contact=Contact::find($id);
        }
        $contact->name = $request->name;
        $contact->phone_number = $request->phone_number;
        $contact->country = $request->country;
        $contact->city = $request->city;
        $contact->latitude = $request->latitude;
        $contact->longitude = $request->longitude;
        return request()->json(['status'=>'success','contact'=>$contact]);
    }

    function getContacts() {
        $contacts=Contact::get();
        return request()->json(['status'=>'success','contacts'=>$contacts]);
    }
    function deleteContact($id){
        $contact=Contact::find($id);
        if(!$contact){
        return request()->json(['status'=>'failed','meesage'=>'User not found']);
            
        }
        $contact->delete();
        return request()->json(['status'=>'success']);
        
    }
}
