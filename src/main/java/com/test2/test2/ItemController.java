package com.test2.test2;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

   private final ItemService itemService;

   public ItemController(ItemService itemService){
       this.itemService=itemService;
   }
    @GetMapping
    public List<Item> getAllItems() {
        return itemService.findAll();
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable("id") String id) {
        try {
            return itemService.getItemById(id);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping

    public Item createItem
            (@Valid @RequestBody ItemDto dto)
    {
        return itemService.add(dto);
    }



}
