var Podcast = function () {

  this.defineProperties({
    // ID
    id:       {type:'string',   required: true  },
    // Title and Descriptions
    title:    {type:'string',   required: true  },
    subtitle: {type:'string'},
    // Urls
    feedUrl:  {type:'string',   required: true  },
    artwork:  {type:'string'},
    // Metas
    updated:  {type:'datetime', required: true  },

    //
  });

  this.autoIncrementId = true;
};

Podcast = geddy.model.register('Podcast', Podcast);