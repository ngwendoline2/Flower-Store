<?php
Class Item{
    public $id;
    public $title;
    public $price;
    public $image;

    function _construct($id, $title, $price, $image){
        $this->id=$id;
        $this->title = $title;
        $this->price = $price;
        $this->image = $image;
    }
}