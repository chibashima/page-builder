class NoSpaceValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    if value =~ /[^\w]/
      record.errors[attribute] << options[:message] || 'is not include spaces'
    end
  end
end
