const Content = require('../../core/content');
const express = require('express');

const getAllContent = async (req, res, next) => {
  try {
    const allContent = await Content.getAllContent();
    return res.status(200).json(allContent);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
const addNewContent = async (request, response, next) => {
  // Extracting the data from the request body. Will not work without the two middlewares for body parsing.
  const content = request.body;
  // Simple validation for falsy values
  if (!content.content || !content.element_type || content.content.length < 2) {
    return response.status(400).json('Error in request!');
  }

  try {
    await Content.addNewContent({ element_type: content.element_type, content: content.content });
    return response.status(201).json('Song added!');
  } catch (error) {
    return response.status(500).json(error);
  }
};

module.exports = {
  getAllContent,
  addNewContent,
};