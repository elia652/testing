package com.test2.test2;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final MongoRepos mongoRepos;
    private final ItemMapper itemMapper;

    public ItemService(MongoRepos mongoRepos, ItemMapper itemMapper) {
        this.mongoRepos = mongoRepos;
        this.itemMapper = itemMapper;
    }

    public Item add(ItemDto dto) {
        Item item = itemMapper.toItem(dto);
        return mongoRepos.save(item);
    }
    public List<Item> findAll() {
        List<Item> items = mongoRepos.findAll();
        System.out.println("Fetched items: " + items);
        return items;
    }


    public Item getItemById(String id) {
        return mongoRepos.findById(id)
                .orElseThrow(() -> new RuntimeException("Item not found with id: " + id));
    }
}

