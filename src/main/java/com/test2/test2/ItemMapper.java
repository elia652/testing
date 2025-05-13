package com.test2.test2;

import org.springframework.stereotype.Service;

@Service
public class ItemMapper {

    public Item toItem(ItemDto dto) {
        if (dto == null) {
            throw new NullPointerException("It's null");
        }
        var item = new Item();
        item.setDescription(dto.description());
        item.setName(dto.name());
        item.setPrice(dto.price());
        return item;
    }
}
