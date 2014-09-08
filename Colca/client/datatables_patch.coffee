DataTableComponent.prototype.oldRendered = DataTableComponent.prototype.rendered

DataTableComponent.prototype.rendered = ->
  that = this
  setTimeout ->
    that.oldRendered()
  , 0
  return

DataTableComponent.prototype.setQuery = (query) ->
  if @subscription
    @prepareQuery() unless @query
    #unless @query() is query
    if true
      @query query
      @rendered()

Template.DataTable.created = ->
  @.__component__ = @.__view__
  dataTableInstance = new DataTableComponent @