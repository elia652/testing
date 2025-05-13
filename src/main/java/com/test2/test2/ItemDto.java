package com.test2.test2;

import jakarta.validation.constraints.NotBlank;

public record ItemDto(
        @NotBlank(message="Name can't be blank ")
        String name,

         double price,
        @NotBlank(message="description can't be blank ")
         String description

) {
}