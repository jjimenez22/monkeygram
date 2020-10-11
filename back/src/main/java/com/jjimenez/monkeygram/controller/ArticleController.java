package com.jjimenez.monkeygram.controller;

import com.jjimenez.monkeygram.model.Article;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class ArticleController {
    
    @GetMapping("/articles")
    @CrossOrigin
    public List<Article> getArticles() {
        return Collections.singletonList(new Article("Monkeytitle", "Bananas!"));
    }
}
