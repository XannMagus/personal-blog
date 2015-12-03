# angular-seed — the seed for AngularJS apps
# Purpose
It's just a personal project to create my own blog using AngularJS. It's mostly there for me to experiment.

# Principles

I intend for it to have several guiding principles.

## 1. As much static content as possible

As this is intended to be a blog, the content in itself should not change much, once written. 
In an effort to stick as much as possible with modern ways of doing things, I will try to get rid of as much dynamic code server-side as possible.

This is the main reason I am doing this in AngularJS to begin with, the learning factor aside.
Articles should be served statically, probably in raw md format. I'll then render the md on the site.

## 2. Easy to update nonetheless

Even if the content is static, I don't want the whole process to be a pain in the ass. 
The md editing should be easy to do and easy to check. The ideal would be a WYSIWYG kind of editor, but I'll see.
Images should be easy to upload. 

Basically, I want to have to connect to the FTP only once, to deploy the website. 
Afterwards, I should be able to update the content without ever going "backstage".

## 3. Categories or tags

I want the content to be easy to sort and navigate. I'll probably include some kind of tags or categories to the articles.
This implies that the content will have meta-datas, including author, time of update, etc. Plus, there will be filters, like NSFW or some such.

## 4. Comments

Not necessary at first, I want to enable my readers to comment on the content I post.
I'll probably use a third-party tool to take care of this for me, since I want static content.

## 5. Secured Admin area

Of course, I don't want anyone to be able to modify my articles or create new ones. 
Therefore, the admin area, where I'll create and update the content, should be secured one way or another.

[![Stories in Ready](https://badge.waffle.io/XannMagus/personal-blog.png?label=ready&title=Ready)](https://waffle.io/XannMagus/personal-blog)
[![Stories in Progress](https://badge.waffle.io/XannMagus/personal-blog.png?label=In%20Progress&title=In%20Progress)](https://waffle.io/XannMagus/personal-blog)
[![Build Status](https://travis-ci.org/XannMagus/personal-blog.svg?branch=master)](https://travis-ci.org/XannMagus/personal-blog)

[![Throughput Graph](https://graphs.waffle.io/XannMagus/personal-blog/throughput.svg)](https://waffle.io/XannMagus/personal-blog/metrics)
